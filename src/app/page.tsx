import LogoIqos from "@/components/LogoIqos";
import MainNavButton from "@/components/MainNavButton";

export default function Home() {
	return (
		<div className="bg-tottem flex h-screen w-full flex-col items-center font-iqos text-white">
			<LogoIqos />

			<div className="flex flex-1 items-center justify-center pt-[100px]">
				<h1 className="tottem-headline text-center text-[86px] leading-[1.15]">
					Your Journey
					<br />
					Starts Here
				</h1>
			</div>

			<nav className="flex flex-col items-center gap-[45px] pb-[320px]">
				<MainNavButton iqosLabel="DWP MAPS" iqosLink="/map" />
				<MainNavButton iqosLabel="PROGRAM PRIVILEGES" iqosLink="/privileges" />
				<MainNavButton iqosLabel="STAGE RUNDOWN" iqosLink="/rundown" />
			</nav>
		</div>
	);
}
