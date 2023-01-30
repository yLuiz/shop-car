import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Message from '../../components/Message';
import { addCar } from '../../store/cars';
import { Creators as CreatorsLayout } from '../../store/layout';

export default function Add() {

	const [form, setForm] = useState(
		{ name: '', url: '' }
	);
	const dispatch = useDispatch();

	const { toggleMessage } = CreatorsLayout;

	function formChange(event) {
		setForm({...form, [event.target.name]: event.target.value});
	}

	function handleSubmit(event) {
		event.preventDefault();

		console.log(form);

		// dispatch({type: 'ADD_CAR', payload: form }); // É a mesma coisa que => dispatch(addCar(form));
		dispatch(toggleMessage());
		dispatch(addCar(form));
		setForm({ name: '', url: '' });

		setTimeout(() => {
			dispatch(toggleMessage());
		}, 2200);

	}

	return (
		<form onSubmit={handleSubmit} className="container mt-5">
			<div className="form-group">
				<label>Nome</label>
				<input onChange={formChange} type="text" name="name" className="form-control" value={form.name}placeholder="Nome..." />
			</div>
			<div className="form-group">
				<label>URL:</label>
				<input onChange={formChange} type="text" name="url" className="form-control" value={form.url} placeholder="URL:https://cars" />
			</div>
			<button type="submit" className="btn btn-primary">
				Adicionar
			</button>
		</form>
	);
}
