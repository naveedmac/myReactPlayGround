import Option from './components/Option'
const Option =(props)=>{
    return <div>
    {props.optionText}
    <button onClick={(e)=>{props.handleRemove(props.optionText)}}>remove</button>
    </div>
}
export default Option;