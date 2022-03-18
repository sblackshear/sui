import cl from 'classnames';
import { memo, useCallback, useEffect, useRef, useState } from 'react';

import st from './TypingWords.module.scss';

export type TypingWordsProps = {
    className?: string;
    words: string[];
    lettersIntervalMS?: number;
    changeWordDelayMS?: number;
};

function useTypeWriter(
    word: string,
    intervalMS: number,
    onComplete?: () => void
) {
    const [content, setContent] = useState('');
    const [numLetters, setNumLetters] = useState(0);

    const wordRef = useRef(word);
    wordRef.current = word;
    const numRef = useRef(numLetters);
    numRef.current = numLetters;
    const completeRef = useRef(onComplete);
    completeRef.current = onComplete;

    useEffect(() => {
        setNumLetters(0);
    }, [word]);

    useEffect(() => {
        const i = setInterval(() => {
            const totalLetters = wordRef.current.length;
            const nextNumLetters = numRef.current + 1;
            if (totalLetters === nextNumLetters) {
                completeRef.current?.();
            }
            if (nextNumLetters > totalLetters) {
                return;
            }
            setNumLetters((num) => ++num);
        }, intervalMS);

        return () => {
            clearInterval(i);
        };
    }, [intervalMS]);

    useEffect(() => {
        setContent(word?.slice(0, numLetters) || '');
    }, [word, numLetters]);

    return content;
}

function TypingWords({
    className,
    words,
    lettersIntervalMS = 100,
    changeWordDelayMS = 5000,
}: TypingWordsProps) {
    const [wordIndex, setWordIndex] = useState(0);
    const [word, setWord] = useState(words?.[wordIndex] || '');
    const wordMsRef = useRef(changeWordDelayMS);
    wordMsRef.current = changeWordDelayMS;
    const wordsMsRef = useRef(words);
    wordsMsRef.current = words;

    useEffect(() => {
        setWordIndex(0);
    }, [words]);

    useEffect(() => {
        const t = setTimeout(() => {
            setWord(wordsMsRef.current?.[wordIndex] || '');
        }, wordMsRef.current);
        return () => {
            clearTimeout(t);
        };
    }, [wordIndex]);

    const onWordComplete = useCallback(() => {
        setWordIndex(
            (index) => (index + 1) % (wordsMsRef.current?.length || 0)
        );
    }, []);
    const content = useTypeWriter(word, lettersIntervalMS, onWordComplete);
    return <span className={cl(st.container, className)}>{content}</span>;
}

export default memo(TypingWords);
