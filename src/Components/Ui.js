import axios from 'axios';
import React, { useEffect, useState } from 'react';
import HouseList from './HouseList';
import EditRow from './EditRow';

export default function Ui() {
	const API =
		'https://crudcrud.com/api/436544683fa5499f8af8e456dca464ab/houses';

	const [ APIData, setAPIData ] = useState( [] );
	useEffect( () => {
		axios.get( API ).then( ( response ) => {
			console.log( response.data );
			setAPIData( response.data );
		});
		}, 
		[]
	);

	const updateAPIData = ( _id ) => {
		axios.put( `${ API }/${ _id }`, {
			location: editFormData.location,
			bedrooms: editFormData.bedrooms,
			bathrooms: editFormData.bathrooms,
			garageStalls: editFormData.garageStalls,
			squareFootage: editFormData.squareFootage,
			price: editFormData.price,
			description: editFormData.description,
		})
			.then( ( res ) => {
				getData();
				console.log( res )

			})
			.catch( function ( error ) {
				console.log( error );
			});
	};

	const [ data, setData ] = useState( APIData );

	const getData = () => {
		axios.get( API ).then( ( getData ) => {
			setAPIData( getData.data );
		});
	};

	const handleDeleteClick = ( _id ) => {
		axios.delete( `${ API }/${ _id }` )
			.then( ( res ) => {
				getData();
				console.log( res );
				alert( "House has been deleted.")
			})
			.catch( function ( error ) {
				console.log( error );
			});
	};

	const handleEditClick = ( event, data ) => {
		event.preventDefault();
		setEditHouseId( data._id );

		const formValues = {
			location: data.location,
			bedrooms: data.bedrooms,
			bathrooms: data.bathrooms,
			garageStalls: data.garageStalls,
			squareFootage: data.squareFootage,
			price: data.price,
			description: data.description,
		};

		setEditFormData( formValues );
	};

	const [ editFormData, setEditFormData ] = useState( {
		location: '',
		bedrooms: '',
		bathrooms: '',
		garageStalls: '',
		squareFootage: '',
		price: '',
		description: '',
	});

	const handleEditFormSubmit = ( event ) => {
		event.preventDefault();
		const editedHouse = {
			_id: editHouseId,
			location: editFormData.location,
			bedrooms: editFormData.bedrooms,
			bathrooms: editFormData.bathrooms,
			garageStalls: editFormData.garageStalls,
			squareFootage: editFormData.squareFootage,
			price: editFormData.price,
			description: editFormData.description,
		};

		updateAPIData( editHouseId );

		const newHouse = [ ...data ];
		const index = data.findIndex( ( data ) => data._id === editHouseId );

		newHouse[ index ] = editedHouse;

		setData( newHouse );
		setEditHouseId( null );
	};

	const handleEditFormChange = ( event ) => {
		event.preventDefault();

		const fieldName = event.target.getAttribute( 'name' );
		const fieldValue = event.target.value;

		const newFormData = { ...editFormData };
		newFormData[ fieldName ] = fieldValue;

		setEditFormData( newFormData );
	};

	const [ editHouseId, setEditHouseId ] = useState( null );

	const handleCancelClick = () => setEditHouseId( null );

	return (
		<div className='div-table'>
			<div className='table-responsive'>
				<form onSubmit={ handleEditFormSubmit }>
					<table className='table'>
						<thead>
							<tr>
								<th>
									Location
								</th>
								<th>
									Bedrooms
								</th>
								<th>
									Bathrooms
								</th>
								<th>
									Garage Stalls
								</th>
								<th>
									Square Footage
								</th>
								<th>Price</th>
								<th>Description</th>
								<th>Edit/Delete</th>
							</tr>
						</thead>
						<tbody>
							{ APIData.map( ( data, index ) => (
								<>
									{ editHouseId === data._id ? (
										<EditRow
											editFormData={
												editFormData
											}
											handleEditFormChange={
												handleEditFormChange
											}
											handleCancelClick={
												handleCancelClick
											}
										/>
									) : (
										<HouseList
											data={ data }
											handleEditClick={
												handleEditClick
											}
											handleDeleteClick={
												handleDeleteClick
											}
										/>
									)}
								</>
							))}
						</tbody>
					</table>
				</form>
			</div>
		</div>
	);
}