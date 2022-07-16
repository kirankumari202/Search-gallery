
import data from './data';
import React,{useState} from 'react';


const Home = () => {
   const[filter, setFilter] = useState('');
   const SearchText = (event) =>{
	setFilter(event.target.value);
   }
   let dataSearch = data.cardData.filter(item =>{
	return Object.keys(item).some(key =>
		item[key].toString().toLowerCase().includes(filter.toString().toLocaleLowerCase())
		)

   });

	return(

		<section className='py-4 container'>
			<div className='col-12 mb-5'>
				<h2 className='text-center'>Photographer's Showcase</h2>
			</div>
			<div className='mb-3 col-4 mx-auto text-center'>
				<label className='from-lable h4'>Search</label>
				<input
				type= "text"
				className='from-control'
				value={filter}
				onChange={SearchText.bind(this)}
				/>
			</div>
			<div className='row justify-content-center'>
				{dataSearch.map((item,index) =>{
					return(
						<div className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
					        <div className='card p-0 overflow-hidden h-100 shadow'>
						<img src={item.img} className='card-img-top'/>
						<div className='card-body'>
							<h5 className='card-title'> {item.title}</h5>
							<p className='card-text'>{item.desc}</p>

						</div>
					</div>
				</div>	

					)
				})}
                                                                    
                               

				
			</div>

		</section>
	)

}
export default Home;