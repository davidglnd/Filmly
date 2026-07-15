interface Props {
    title: string;
    subtitle?: string;
}

export const CustomHeader = ({ title }: Props) => {
    return (
        <h1>{title}</h1>
    )
}