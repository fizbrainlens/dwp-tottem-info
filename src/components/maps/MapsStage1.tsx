import NavLegends from "./NavLegends";
import MapZoom from "./MapZoom";

export default function MapsStage1() {
    return (
        <div className="flex flex-col mt-20 font-iqos">

            <MapZoom 
                zoomsize="200%"
                position="80%_0%"
                iconUrl="icon-stage"
                title="STAGE 1"
                content="
                Lose yourselft in the electrifying pulse of 
                electronic dance music. Feel the rhythm come
                alive at the iconic garuda stage and immerse
                in stunning performance by local, national, and
                international electronic music artis."
            />
            <NavLegends />
        </div>
    );
}
