const Card = ({info}) => {
    return (
        <div class="card sticky-top">
            <div class="card-body">
                <h5 class="card-title">{info.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{info.email}</h6>
                <p class="card-text">{info.date}</p>
                <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default Card;
