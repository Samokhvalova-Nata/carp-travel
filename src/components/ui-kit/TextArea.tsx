import { TextAreaProps } from '@/types/formTypes';



const TextArea = ({textArea, register, section}:TextAreaProps) => {
  const { id, field, label, ariaLabel} = textArea;

  return (
    <div className='flex flex-col mb-[16px] '>
      <label htmlFor={id} className='mb-[4px] first-line:text-12 tracking-2.4 leading-[2]'>
        {label}
        </label>
        <textarea 
          id={id}
          aria-label={ariaLabel}
        className={`textarea 
          ${section === 'contacts'
            ? 'h-[193px] md:w-[463px] md:h-[221px] lg:w-[607px] lg:h-[174px]'
            : 'h-[196px] md:h-full  md:w-[222px] lg:w-full'}`}
        {...register(field)}></textarea>
    </div>
  )
}

export default TextArea


// lg:w-[292px]