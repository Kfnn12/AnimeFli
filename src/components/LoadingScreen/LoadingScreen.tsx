import "twin.macro"
import Running from "../../assets/images/ZJFD.gif"

export default function LoadingScreen() {
  return (
    <div tw="flex items-center justify-center w-full h-[100vh]">
      <img src={Running} alt="loading" />
    </div>
  )
}
