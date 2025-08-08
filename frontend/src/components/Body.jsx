import Menu from './Menu.jsx';
import Content from './Content.jsx';

export default function Body({
    menuShowed,
}) {
    return (
        <div
        className="body"
        style={{
            flexGrow: 1,
            display: 'flex',
            flexdirection: 'column',
        }}
        >
            { menuShowed && <Menu />}
            <Content />
        </div>
    );
    
}