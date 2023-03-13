export default function ({ title, link, imgSrc, imgAlt, children }): JSX.Element {
    return (
        <a href={link} target="_blank">
            <div className="shadow-lg p-4 space-y-2 h-full transition-transform hover:-translate-y-4">
                <img className="w-full" src={ imgSrc } alt={ imgAlt } />

                <h3 className="text-2xl"><strong>{ title }</strong></h3>

                <div className="overflow-auto text-justify">
                    { children }
                </div>
            </div>
        </a>
    );
}