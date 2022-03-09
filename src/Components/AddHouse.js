import axios from 'axios';
import React, { useState } from 'react';

export default function AddHouse() {
	const [ location, setLocation ]  =  useState( '' );
	const [ bedrooms, setBedrooms ]  =  useState( '' );
	const [ bathrooms, setBathrooms ]  =  useState( '' );
	const [ garagestalls, setGarageStalls ]  =  useState( '' );
	const [ squareFootage, setSquareFootage ]  =  useState( '' );
	const [ price, setPrice ]  =  useState( '' );
	const [ description, setDescription ]  =  useState( '' );
	

	const postData  = ()  => {
		axios.post(
			'https://crudcrud.com/api/436544683fa5499f8af8e456dca464ab/houses',
			{
				location,
				squareFootage,
				bedrooms,
				bathrooms,
				garagestalls,
				price,
				description,
			}
		);
	};
	return (
		<div className = 'house-form'>
			<div className = 'house-form-box'>
				<h2> Add a House </h2>
				<form>
					<label className = 'col-form-label'> Location </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'location'
						id = 'location'
						placeholder = 'House Location'
						onChange  =  { ( e )  => setLocation( e.target.value ) }
					/>
					<label className = 'col-form-label'> Number of Bedrooms </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'bedrooms'
						id = 'bedrooms'
						placeholder = '# of bedrooms'
						onChange  =  { ( e )  => setBedrooms( e.target.value ) }
					/>
					<label className = 'col-form-label'> Number of Bathrooms </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'bathrooms'
						id = 'bathrooms'
						placeholder = '# of bedrooms'
						onChange  =  { ( e )  => setBathrooms( e.target.value ) }
					/>
					<label className = 'col-form-label'> Square Footage </label>
					<input
						className  =  'form-control'
						type = 'text'
						name = 'squareFootage'
						id = 'squareFootage'
						placeholder = 'Total sq ft'
						onChange  =  { ( e )  => setSquareFootage( e.target.value ) }
					/>
					<label className = 'col-form-label'> Garage Stalls </label>
					<input
						className  =  'form-control'
						type = 'text'
						name = 'garageStalls'
						id = 'garageStalls'
						placeholder = '# of Garage Stalls'
						onChange  =  { ( e )  => setGarageStalls( e.target.value ) }
					/>
					<label className = 'col-form-label'> Price </label>
					<input
						className = 'form-control'
						type = 'text'
						name = 'price'
						id = 'price'
						placeholder = 'House Price'
						onChange  =  { ( e )  => setPrice( e.target.value ) }
					/>

					<label className = 'col-form-label'> Description </label>
					<textarea
						className = 'form-control'
						type = 'text'
						name = 'description'
						id = 'description'
						placeholder = 'Description'
						onChange  =  { ( e )  => setDescription( e.target.value ) }
					/>
					<button
						onClick  =  { postData }
						className = 'btn btn-primary mt-3'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}