import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes,} from 'react';
import s from './SuperSelect.module.css';

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: any[] = options
        ? options.map((o) => (
            <option
                id={'hw7-option-' + o.id}
                className={s.SuperSelectOption}
                key={o.id}
                value={o.value}
            >
                {o.value}
            </option>
        ))
        : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption?.(e.currentTarget.value);
    };

    const finalSelectClassName = s.SuperSelect + (className ? ' ' + className : ''); // Можно добавить класс при необходимости

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
