const TestCard = (props)=>{
    return(
        <div className='font-lexend bg-[#F4F4F4] rounded-xl px-3 py-3 md:px-2 md:py-3 xl:pl-7 xl:pr-10 xl:py-10 '>
            <div className='grid grid-cols-5'>
                <div className=''>
                    <img src={props.avatarImage}/>
                </div>
                <div className='col-span-4 md:pl-3 xl:pl-0'>
                    <p className='font-normal text-base'>{props.name}</p>
                    <p className='font-normal text-sm'>{props.position}</p>
                </div>
            </div>
            <div className='md:py-5'>
                <p className='font-light text-base my-5 md:my-auto'>{props.description}</p>
            </div>
            <div>
                <img src={props.companyImage}/>
            </div>
        </div>
    )
}
export default TestCard