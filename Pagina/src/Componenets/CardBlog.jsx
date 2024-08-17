import imagen1 from '../assets/imagen1.png';
import imagen2 from '../assets/imagen2.png';
import imagen3 from '../assets/imagen3.png';
import imagen4 from '../assets/imagen1.png';
import imagen5 from '../assets/imagen3.png';



const images = {
    1: imagen1,
    2: imagen2,
    3: imagen3,
    4: imagen4,
    5: imagen5
  };


export const CardBlog = ({ blog }) => {
	return (
		<div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
			<div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
				<img src={images[blog.id]} alt={blog.title} />
				<span className='absolute top-3 left-4 border border-blue-200 text-xs rounded-xl px-4 py-2 font-semibold capitalize bg-blue-100'>
					{blog.category}
				</span>
			</div>
			<div className='px-4 flex gap-4'>
				<div className='flex flex-col gap-2 w-full h-auto'>
					<h3 className='text-sm font-bold text-slate-700 leading-7 whitespace-normal'>
						{blog.title}
					</h3>
					<div className='flex gap-4 w-full'>
						<p className='text-xs h-auto text-slate-800 font-semibold truncate'>
							{blog.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

