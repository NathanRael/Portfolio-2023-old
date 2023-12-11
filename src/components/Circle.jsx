export default function Circle(){
    const circleStyle = {
        width : '190px',
        height : '190px',
        borderRadius: '296px',
        background: 'rgba(111, 61, 244, 0.40)',
        filter: 'blur(160.6999969482422px)',

    }
    return (
        <div className="position-absolute " style={circleStyle}></div>
    )
}