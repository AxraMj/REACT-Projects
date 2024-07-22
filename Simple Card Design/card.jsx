import profile from './asset/profile.jpg'

function Card()
{
    return(
        <div className='card'>
            <img className="image"src={profile}></img>
            <h1 className='text'>Axra</h1>
            <p className='para'>I am a Freelance Copywriter and a Developer</p>
        </div>
    );
}

export default Card
