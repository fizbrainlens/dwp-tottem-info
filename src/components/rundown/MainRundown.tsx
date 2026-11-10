import BacktoMain from "../BacktoMain";
import MainNavButton from "../MainNavButton";

export default function MainRundown() {
	return (
		<>
			<div className="flex flex-1 items-center justify-center pt-[100px]">
				<h1 className="tottem-headline text-center text-[86px] leading-[1.15]">
					Stage
					<br />
					Rundown
				</h1>
			</div>

			<nav className="flex flex-col items-center gap-[45px] pb-[420px]">
				<MainNavButton iqosLabel="DAY 1" iqosLink="/rundown?day=day1" />
				<MainNavButton iqosLabel="DAY 2" iqosLink="/rundown?day=day2" />
				<MainNavButton iqosLabel="DAY 3" iqosLink="/rundown?day=day3" />
			</nav>

			<BacktoMain />
		</>
	);
}
