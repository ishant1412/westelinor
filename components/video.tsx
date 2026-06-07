
const VideoSection=()=>{
return (<>

<div  className="w-[100%] border-b-2 border-t-2 border-b-gray-100 border-t-gray-100 flex place-content-center py-5 bg-linear-to-b from-white to-blue-400">

<div
className="w-[40%]"
>
    <div 
    className="text-2xl text-blue-500 font-bold text-center my-5"
    >---WHAT CLIENT SAYS---</div>
    <video width="100%"
    className="rounded-xl"
autoPlay
muted
loop
controls>
<source src="/vid.mp4" type="video/mp4" />
</video>
</div>
    </div>
</>)
}
export default VideoSection