function Pills({children}) {

  const colors = [
    'text-[#63dec0] bg-[#e5faf5]',
    'text-[#f2cf64] bg-[#fdf8e8]',
    'text-[#eb5757] bg-[#ffe7e7]',
  ]
  
  const style = colors[Math.floor(Math.random()*3)]
    return (
    <div className={`px-2 md:px-5 mx-2 text-xs md:text-sm  mt-2 py-2.5 rounded-lg font-medium  text-center ${style}`}>{children}</div>
  )
}

export default Pills