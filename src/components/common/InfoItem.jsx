

export const InfoItem = ({icon, text, href}) =>(
        <a href={href} className="flex items-center gap-2">
            <span>{icon}</span>
            <span>{text}</span>
    </a>
)