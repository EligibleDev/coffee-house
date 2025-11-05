import PrimaryButton from "@/components/primaryButton/primaryButton";

const Banner = () => {
    return (
        <section className="relative h-screen min-h-[600px]">
            <video
                className="absolute h-full w-full object-cover"
                src={"/videos/banner-video.mp4"}
                autoPlay
                loop
                muted
                playsInline
            ></video>
            <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center bg-[#00000065] text-white">
                <div className="h-1/5 lg:h-1/3 xl:h-1/5"></div>
                <div className="flex flex-col items-center text-center">
                    <h1 className="mx-auto w-full text-5xl leading-none font-bold sm:w-2/3 sm:text-6xl lg:text-[80px]">
                        <span className="text-primary-green">Time to Discover </span>
                        Coffee House
                    </h1>
                    <p className="font-jost mx-auto w-full px-3 pt-4 pb-10 text-lg lg:w-2/3">
                        Savor artisanal delights and aromatic brews in our cozy haven;
                        where every sip tells a story, and every bite is a moment of pure
                        indulgence
                    </p>
                    <PrimaryButton text="Buy now" link="/drinks" extraClass="mx-auto" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
