import NavigationMenu from "./prototype/NavigationMenu"

interface PosterProps {
    name:string;
    description:string;
    inspirations:string;
}

export default function Poster({name, description, inspirations}:PosterProps) {
    return (
        <div className="h-[calc(100vh-20vh)] md:grid grid-cols-8 grid-rows-1 gap-8 md:m-14">
        
            <div className="prototype place-content-center border-8 border-white col-span-5">
                <NavigationMenu />
            </div>
            <div className="border-b-1 col-span-3 flex flex-col justify-end gap-1">
                <h2 className="h-12 border-t-1 text-sm font-mono uppercase tracking-wide">{name}</h2>
                <p className="text-sm leading-6">{description}</p>
                <div className="border-t-1 flex gap-8">
                <h2 className="text-sm leading-6">Inspirations</h2>
                <p className="text-sm leading-6">{inspirations}</p>
                </div>
            </div>
      </div>
    )
}