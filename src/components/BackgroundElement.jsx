export default function BackgroundElement({rotated}){
    return <div className={`backgroundElement ${rotated ? 'rotated' : ''}`}></div>
}