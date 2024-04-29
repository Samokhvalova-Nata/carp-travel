import { FormFields, ICheck } from '@/types/formTypes';
import { UseFormRegister } from 'react-hook-form';

interface CheckProps {
  check: ICheck;
  register: UseFormRegister<FormFields>;
};

const Check = ({ check, register }: CheckProps) => {
  const { id, field, type, required, ariaLabel, text } = check;

  return (
    <div className="relative">
      <input
        type={type}
        id={id}
        required={required}
        aria-label={ariaLabel}
        className="check-input visually-hidden"
        {...register(field, { required: required })}
      />
      <label
        htmlFor={id}
        className="check-label flex cursor-pointer content-start gap-[16px] text-12 leading-[1.83]"
      >
        <span className="absolute inline-block h-[22px] w-[22px] border border-white lg:h-[24px] lg:w-[24px]"></span>
        <span className="md:w-[192px]">{text}</span>
      </label>
    </div>
  );
};

export default Check;
