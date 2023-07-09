const NavbarContainer = ({children})=>{
    return(
        <span className='text-blackText md:text-white text-left block mb-10 md:mb-0 md:inline md:mr-8 font-normal text-lg'>
            {children}
        </span>
    )
 }
const Navbars = (props)=>{
    return(
        <NavbarContainer>
                <a href={props.href}>{props.text}</a>
        </NavbarContainer>
    )
}
export default Navbars