import {Question} from './question';

export const QUESTIONS: Question[] = [
    {question_num:0,
        question_string: 'How open are your family members to discussing your end of life care options, wishes or concerns?',
        responses: [
            {response_num: 0, response_string: 'My family will not let me talk about it freely.'},
            {response_num: 1, response_string: 'My family is somewhat open to hearing about some of my concerns.'},
            {response_num: 2, response_string: 'My family is very open to listening to my concerns and wishes.'},
            {response_num: 3, response_string: 'I am not sure what my family thinks about this topic.'}
        ],
        selectedAnswer:0},

    {question_num:1,
        question_string: 'How important is it to maintain your independence and privacy?',
        responses: [
            {response_num: 0, response_string: 'It is extremely important that I maintain my independence as much as possible.'},
            {response_num: 1, response_string: 'It is somewhat important but I also am okay with being somewhat dependent on others.'},
            {response_num: 2, response_string: 'I have no support system so I must take care of myself whether I want to or not.'},
            {response_num: 3, response_string: 'I am fine with giving up my independence as I need help.'}
        ],
        selectedAnswer:0},

   {question_num:2,
       question_string: 'If you have a choice of where to die, where would you be most comfortable?',
       responses: [
            {response_num: 0, response_string: 'I want to die at home.'},
            {response_num: 1, response_string: 'I want to die in a hospice or a care home.'},
            {response_num: 2, response_string: 'I want to die in a hospital.'},
            {response_num: 3, response_string: 'I am not sure as it depends on the circumstances.'}
       ],
       selectedAnswer:0},

    {question_num:3,
        question_string: 'Choose your situation as it relates to having a primary health care provider.',
        responses: [
            {response_num: 0, response_string: 'I have a family doctor who I can speak freely with.'},
            {response_num: 1, response_string: 'I have a family doctor who I do not communicate well with.'},
            {response_num: 2, response_string: 'I don\'t have a family doctor, so must visit walk-in or emergency rooms when I need help.'},
            {response_num: 3, response_string: 'I do not have a family doctor, but I get home care support from nurse practitioners.'}
        ],
        selectedAnswer:0},

    {question_num:4,
        question_string: 'What are your thoughts on receiving CPR?',
        responses: [
            {response_num: 0, response_string: 'I have a terminal illness and do not want CPR performed on me.'},
            {response_num: 1, response_string: 'I am still healthy and would want CPR performed on me.'},
            {response_num: 2, response_string: 'It would depend on my situation, ie- if I was seriously injured with little hope of a normal life or not.'},
            {response_num: 3, response_string: 'I have no opinion about CPR and trust that my health care providers would know what to do.'}
        ],
        selectedAnswer:0},

    {question_num:5,
        question_string: 'How important to you is your religion or spirituality?',
        responses: [
            {response_num: 0, response_string: 'My faith and religious beliefs are very important to me.'},
            {response_num: 1, response_string: 'I don\'t practice any religious beliefs but I feel that I am spiritual in my own way.'},
            {response_num: 2, response_string: 'I am not religious or spiritual in any way and don\'t believe in a God of any kind.'},
            {response_num: 3, response_string: 'I am open to the idea of religious practice should I become vulnerable in my advanced age.'}
        ],
        selectedAnswer:0},

    {question_num:6,
        question_string: 'How would you feel about accepting medical interventions that would affect your everyday enjoyment of life?',
        responses: [
            {response_num: 0, response_string: 'I would accept any medical interventions in order to stay alive, no matter the cost.'},
            {response_num: 1, response_string: 'I would want to try all possible alternatives first, before accepting the intervention.'},
            {response_num: 2, response_string: 'If I was terminally ill and the interventions are only for pain control and comfort I would accept them.'},
            {response_num: 3, response_string: 'I would not want any medical interventions if it means I lose my level of existing comfort.'}
        ],
        selectedAnswer:0},

    {question_num:7,
        question_string: 'If you had a choice of being aware but in some pain or being pain-free but unconscious which would you choose?',
        responses: [
            {response_num: 0, response_string: 'I would rather put up with some pain and be awake and aware.'},
            {response_num: 1, response_string: 'I am very sensitive to pain and would therefore rather be given sedating drugs, no matter the consequence.'},
            {response_num: 2, response_string: 'I would seek out other pain lessening treatments such as massage, energy work or acupuncture etc.'},
            {response_num: 3, response_string: 'I am not sure what I would do but being awake enough to talk with family is very important to me.'}
        ],
        selectedAnswer:0},

    {question_num:8,
        question_string: 'Do you feel that you could adequately advocate for yourself if met with a chronic or terminal illness?',
        responses: [
            {response_num: 0, response_string: 'I am very confident in my decision making abilities so I think I would advocate well for' +
                    ' myself' +
                    ' .'},
            {response_num: 1, response_string: 'I am usually good at making decisions on my own behalf but my emotions might get in the' +
                    ' way.'},
            {response_num: 2, response_string: 'I am often unsure of my decisions so I might leave some decisions up to the health' +
                    ' care team.'},
            {response_num: 3, response_string: 'I would let a close family member advocate for me as I am unable to communicate my needs' +
                    ' well.'}
        ],
        selectedAnswer:0},

    {question_num:9,
        question_string: 'What level of interest do you find the subject of MAID (Medical Assistance in Dying)?',
        responses: [
            {response_num: 0, response_string: 'I don\'t know anything about it and I would not care to know because of my beliefs.'},
            {response_num: 1, response_string: 'I have heard of it and am curious to know more about it.'},
            {response_num: 2, response_string: 'I would want MAID but my doctor is against it.'},
            {response_num: 3, response_string: 'If I was in pain and was terminal, I would definitely ask for MAID.'}
        ],
        selectedAnswer:0},

    {question_num:10,
        question_string: 'Have you set anyone in charge of your future financial decisions, should you no longer be able to make them?',
        responses: [
            {response_num: 0, response_string: 'I have a will with a power of attorney for my finances.'},
            {response_num: 1, response_string: 'I have a will and have set up one or two persons to be my financial Representative(s) with Rep-Section-7.'},
            {response_num: 2, response_string: 'I have a will but have not set anyone up to represent me financially.'},
            {response_num: 3, response_string: 'I have no will as yet and no one to manage my finances should I be unable to do so.'}
        ],
        selectedAnswer:0},

    {question_num:11,
        question_string: 'How important is your physical attractiveness to you and would you accept treatments that affect it negatively?',
        responses: [
            {response_num: 0, response_string: 'I take great care to be attractive and would not want any treatments that reduce my attractiveness.'},
            {response_num: 1, response_string: 'I care about looking attractive, but not at the cost of saving my life or parts of my body.'},
            {response_num: 2, response_string: 'I care about some parts of my physical body, such as my hair, but am not as concerned with other parts.'},
            {response_num: 3, response_string: 'I do not have the interest or energy to worry about my physical attractive-ness.'}
        ],
        selectedAnswer:0},

    {question_num:12,
        question_string: 'If I was incapacitated, is there a family member I trust who would advocate for me adequately?',
        responses: [
            {response_num: 0, response_string: 'I have one or more trusted family members who I could turn to.'},
            {response_num: 1, response_string: 'There is a lot of dissent in my family so it could be hard for me to pick one without upsetting the others.'},
            {response_num: 2, response_string: 'I am alone and have no support system to advocate for me.'},
            {response_num: 3, response_string: 'I am not sure any of my family would want to take on the responsibility.'}
        ],
        selectedAnswer:0},

    {question_num:13,
        question_string: 'What life support or prolonging medical interventions, if any, would you most likely disagree with?',
        responses: [
            {response_num: 0, response_string: 'I would not want to any medical interventions if I became mentally incapacitated or brain injured.'},
            {response_num: 1, response_string: 'It is against my religion or other belief system to receive any medical interventions.'},
            {response_num: 2, response_string: 'If I could select a trial period for life prolonging medical interventions, I would be open to it.'},
            {response_num: 3, response_string: 'I am open to all medical interventions if I can be kept alive.'}
        ],
        selectedAnswer:0},

    {question_num:14,
        question_string: 'How much information would you want to receive about my medical diagnosis, treatment and care?',
        responses: [
            {response_num: 0, response_string: 'I would want to know absolutely everything, no matter how dire.'},
            {response_num: 1, response_string: 'I would let my family receive the information and allow them to decide how much to tell me.'},
            {response_num: 2, response_string: 'I rely on family to translate to me as I do not speak English or I can not speak at all.'},
            {response_num: 3, response_string: 'It would depend on the nature of the diagnosis, if terminal then I would want to know less than if it was curable.'}
        ],
        selectedAnswer:0},

    {question_num:15,
        question_string: 'Where do you keep your important papers, such as wills, life insurance and care plan directives, if any?',
        responses: [
            {response_num: 0, response_string: 'I have a safe in my home where all these papers are kept, with access directions given to my advocate.'},
            {response_num: 1, response_string: 'I have yet to get around to compiling all of this information, but my doctor knows my wishes.'},
            {response_num: 2, response_string: 'I have given copies of all important documents to my trusted advocates, doctor and health care team.'},
            {response_num: 3, response_string: 'I do not have any of this handy in case of an emergency.'}
        ],
        selectedAnswer:0},

    {question_num:16,
        question_string: 'Do you believe that you have fulfilled your life has purpose?',
        responses: [
            {response_num: 0, response_string: 'I think I have absolutely fulfilled my purpose.'},
            {response_num: 1, response_string: 'I am still unsure what my life purpose is and and still trying to find meaning.'},
            {response_num: 2, response_string: 'I do not believe in the theory that we have a life purpose, I am more of a nihilist.'},
            {response_num: 3, response_string: 'I feel like I failed to find any purpose to my life.'}
        ],
        selectedAnswer:0},

    {question_num:17,
        question_string: 'Choose the best answer related to what would make your life not worth living?',
        responses: [
            {response_num: 0, response_string: 'No longer being able to carry out my day to day activities without support from others.'},
            {response_num: 1, response_string: 'Experiencing pain and discomfort pretty much all the time, with drugs no longer helping.'},
            {response_num: 2, response_string: 'Losing my intellectual capabilities, becoming forgetful and confused.'},
            {response_num: 3, response_string: 'Becoming too weak to mentally and physically to take on most challenges.'}
        ],
        selectedAnswer:0},

    {question_num:18,
        question_string: 'What would you like done with your body after you die?',
        responses: [
            {response_num: 0, response_string: 'I want to be cremated and my ashes scattered at the location noted in my will.'},
            {response_num: 1, response_string: 'I want to be buried in my pre-purchased plot.'},
            {response_num: 2, response_string: 'I care about the environment so want to have a green burial, preferably a composting burial.'},
            {response_num: 3, response_string: 'I do not know as yet, but am open to finding out more about the options and alternatives.'}
        ],
        selectedAnswer:0},

    {question_num:19,
        question_string: 'Is there anyone you would absolutely not want at your bedside while dying?',
        responses: [
            {response_num: 0, response_string: 'I have no issues with any family members and all would be welcome to say goodbye.'},
            {response_num: 1, response_string: 'I have a few family members who I would absolutely not want at my bedside.'},
            {response_num: 2, response_string: 'I would want all the adults in my family to be able to visit, but not the grandchildren.'},
            {response_num: 3, response_string: 'I would love to see everyone, but with time and space limits controlled by my advocate.'}
        ],
        selectedAnswer: 1},



];