import '../styles/toast.css';
interface ToastProps {
    message: string;
    onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => {
    return (
        <div className="toast" role="status">
            <span>{message}</span>
            <button
                className="toast-close"
                onClick={onClose}
                aria-label="Cerrar aviso"
            >
                ×
            </button>
        </div>
    );
};