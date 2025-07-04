import Image from 'next/image';

export default function InforCard({icon, title, imageUrl, imageAlt, description, subDescription}) {
    return (
        <div className="info-card">
            <div className="icon">
                <Image src={icon} alt={title} width={50} height={50} />
            </div>
            <h3>{title}</h3>
            <div className="image">
                <Image src={imageUrl} alt={imageAlt} width={300} height={200} />
            </div>
            <p>{Description}</p>
            <small>{subDescription}</small>
        </div>
    );
}