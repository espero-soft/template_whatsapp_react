

export const makeSound = (type: string = 'success'): void => {
    try {
        if (!["success", "change", "danger"].includes(type)) {
            type = 'change';
        }
    
        const audio = new Audio();
        audio.src = `/assets/audios/${type}.wav`;
        audio.play();
        
    } catch (error) {
        console.log(error);
        
    }
};
