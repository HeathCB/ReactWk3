import React from 'react';

const EditRow = ( {
	editFormData,
	handleEditFormChange,
	handleCancelClick,
	}) => {
		return (
			<tr>
				<td>
					<input
						type='text'
						placeholder='House Location'
						name='location'
						value={ editFormData.location }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='# of Bedrooms'
						name='bedrooms'
						value={ editFormData.bedrooms }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='# of Bathrooms'
						name='bathrooms'
						value={ editFormData.bathrooms }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='# of Garage Stalls'
						name='garageStalls'
						value={ editFormData.garageStalls}
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='Total sq ft'
						name='squareFootage'
						value={ editFormData.squareFootage }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='Price'
						name='price'
						value={ editFormData.price }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<input
						type='text'
						placeholder='Description'
						name='description'
						value={ editFormData.notes }
						onChange={ handleEditFormChange }></input>
				</td>
				<td>
					<button type='submit' className='btn btn-success'>
						Save
					</button>
					<button
						onClick={ handleCancelClick }
						className='btn btn-warning'>
						Cancel
					</button>
				</td>
			</tr>
	);
};

export default EditRow;