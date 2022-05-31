import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import data from './db.json';

const Table = () => {
	const sertifikat = data.certificates;

	const [search, setSearch] = useState('');

	return (
		<div className='container mx-auto bg-gray-200'>
			<div className='flex items-center justify-between'>
				<h3 className='text-gray-600 ml-2'>
					Prikazite po nazivu ili LOT-u
				</h3>
				<div className='flex items-center py-2 px-2'>
					<input
						type='text'
						placeholder='text'
						className='bg-transparent '
						onChange={(event) => {
							setSearch(event.target.value);
						}}
					/>
					<BsSearch className='mr-2 text-lg' />
				</div>
			</div>
			<div className='flex items-center justify-between px-2 bg-gray-400'>
				<h4 className='flex-[0.5]'>Naziv</h4>
				<p className='flex-[0.2]'>LOT</p>
				<p className='flex-[0.3]'>Velicina</p>
			</div>
			<div>
				{sertifikat
					.filter((val) => {
						if (search == '') {
							return val;
						} else if (
							val.certificate_lot
								.toLowerCase()
								.includes(search.toLowerCase())
						) {
							return val;
						} else if (
							val.certificate_name
								.toLowerCase()
								.includes(search.toLowerCase())
						) {
							return val;
						}
					})
					.map((item, index) => {
						return (
							<div
								className='flex items-center justify-between px-2 bg-gray-400'
								key={index}>
								<h4 className='flex-[0.5]'>
									{item.certificate_name}
								</h4>
								<p className='flex-[0.2]'>{item.certificate_lot}</p>
								<p className='flex-[0.3]'>1.2mb</p>
								<button type='submit'>
									<a
										href={item.certificate_path}
										download
										target='_blank'>
										Preuzmi
									</a>
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Table;
