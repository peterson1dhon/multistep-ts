import { AiOutilineUser, AiOutilineStar } from 'react-icons/ai';
import { FiSend } from 'react-icons/fi';

import './Steps.css';

type stepsProps = {
    currentStep: number;
};

const Steps = ({ currentStep }: stepsProps) => {
    return (
        <div className='steps'>
            <div className='step active'>
                <AiOutilineUser />
                <p>Indentificação</p>
            </div>
            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <AiOutilineStar />
                <p>Avaliação</p>
            </div>
            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};

export default Steps;