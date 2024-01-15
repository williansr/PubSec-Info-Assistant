// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    { text: "¿Cómo puedo cambiar mi contraseña?", value: "¿Cómo puedo cambiar mi contraseña?" },
    { text: "¿Cómo se van a realizar las postulaciones? ¿En qué lugar?", value: "¿Cómo se van a realizar las postulaciones? ¿En qué lugar?" },
    { text: "¿Cómo sabré si fui seleccionado en alguna carrera de la UDP?", value: "¿Cómo sabré si fui seleccionado en alguna carrera de la UDP?" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
