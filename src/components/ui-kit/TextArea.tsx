import { TextAreaProps } from '@/types/formTypes';



const TextArea = ({textArea, register}:TextAreaProps) => {
  const { id, field, label, ariaLabel} = textArea;

  return (
    <div className='flex flex-col mb-[16px]'>
      <label htmlFor={id} className='mb-[4px] first-line:text-12 tracking-2.4 leading-[2]'>
        {label}
        </label>
        <textarea 
          id={id}
          aria-label={ariaLabel}
          className='resize-none bg-inputBgd pl-[8px] py-[2px] text-13 lg:text-20 leading-[1.85] text-justify h-[196px] md:h-[221px] lg:h-[174px] md:w-[222px] lg:w-[290px] placeholder:text-13 placeholder:leading-[1.85] lg:placeholder:leading-[1.2] placeholder:opacity-20 hover:bg-inputBgdFilled focus:bg-inputBgdFilled  transition-all duration-300 outline-none focus:outline-none'
        {...register(field)}></textarea>
    </div>
  )
}

export default TextArea
