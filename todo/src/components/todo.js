
const Todo = ({ onClick, completed, text}) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'blink'
        }}>
        {text}
    </li>

)