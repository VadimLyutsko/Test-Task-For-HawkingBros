import React, {
    ChangeEvent,
    DetailedHTMLProps,
    InputHTMLAttributes,
} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    textForSpan?: string[]
    price?: number
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        // children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        id,
        textForSpan,
        price,

        ...restProps // все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e)
        onChangeChecked?.(e.currentTarget.checked)
    }

    const finalInputClassName = s.checkbox
        + (className ? ' ' + className : '')

    return (

        <>
            {/*<input id="one" type="checkbox"/>*/}
            {/*<label htmlFor="one">*/}
            {/*    <span></span>*/}
            {/*    /!*Off*!/*/}
            {/*    /!*<ins><i> head</i></ins>*!/*/}
            {/*</label>*/}


            <label className={s.label}>
                <input
                    // id={id}
                    type={'checkbox'}
                    onChange={onChangeCallback}
                    className={finalInputClassName}
                    {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
                />
                {textForSpan && (
                    <span
                        id={id ? id + '-span' : undefined}
                        className={s.spanClassName}
                    >
                    {textForSpan[0]} {<b>{price}</b>} {textForSpan[1]}
                </span>
                )}
            </label>
            {/*// благодаря label нажатие на спан передастся в инпут*/}
        </>


    )
}

export default SuperCheckbox
