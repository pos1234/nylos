const FooterLists = ({children})=>{
    return <li className='block mb-4 lg:mb-0 lg:inline'>{children}</li>
}
const FooterItems = (props)=>{
    return(
        <FooterLists>
            <a aria-label={props.ariaLabel} className='font-nunito font-medium text-lg md:mr-7 xl:mr-10 md:font-normal' href={props.href}>{props.text}</a>
        </FooterLists>
    )
}

export default FooterItems