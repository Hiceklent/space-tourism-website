import ExploreButton from "../../components/ExploreButton/ExploreButton"

const Home = () => {
  return (
    <div className='w-full h-screen bg-home-mobile bg-cover bg-center md:bg-home-desktop  bg-no-repeat pt-32 text-center flex flex-col items-center md:flex-row md:gap-24 md:justify-center'>
      <div>
        <h5 className="text-sm text-secondary">SO, YOU WANT TO TRAVEL TO</h5>
        <h2>SPACE</h2>
        <p className="text-secondary pb-11 text-sm w-[20.438rem]">Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit back, and
          relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <ExploreButton title='EXPLORE' />

    </div>
  )
}

export default Home