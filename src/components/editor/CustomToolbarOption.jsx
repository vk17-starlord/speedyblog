import formats from "../../global/ToolbarOptions";


const renderOptions = (formatData)=>{
    const {className,options} = formatData;
    return (
        <select className = {className}>
            <option selected="selected"></option>
            {
                options.map((value,v) =>{
                    return (
                        <option key={`value-${v}`} value={value}></option>
                    )
                })
            }
        </select>
    )
}


const renderSingle = (formatData)=>{
    const {className,value} = formatData;
    return (
        <button className = {className} value = {value}></button>
    )
}


const CustomToolbar = () => (
    <div id="toolbar">
        {
            formats.map((classes , i)=> {
                return (
                    <span key={i} className = "ql-formats">
                        {
                            classes.map(formatData => {
                                return formatData.options?renderOptions(formatData):renderSingle(formatData)
                            })
                        }
                    </span>
                )
            })
        }
    </div>
  )
  export default CustomToolbar;