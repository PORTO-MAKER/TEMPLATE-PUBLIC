import Swal from "sweetalert2";

export const AlertForm = ({ title, text, icon, html }) => {
    Swal.fire({
        icon,
        title,
        text,
        html,
    });
};
