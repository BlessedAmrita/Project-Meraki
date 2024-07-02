import Lottie from 'lottie-react'
import loadingBalls from './loadingBallsLoader.json'

function Loader() {
  return (
    <>
        <div className="w-screen h-screen flex justify-center items-center bg-gradient">
        <Lottie animationData={loadingBalls} loop={true}/>
        </div>
    </>
  )
}

export default Loader