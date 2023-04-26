import React from 'react'

type ButtonProps = {
    children?: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    className?: string;
    isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button type={props.type} className={props.className}>
            {
                props.isLoading &&
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{ margin: 'auto', /* background: 'rgb(241, 242, 243)',  display: 'block'*/ }}
                    width="2em" height="2em" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <g transform="rotate(0 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(30 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(60 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(90 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(120 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(150 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(180 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(210 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(240 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(270 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(300 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite" />
                        </rect>
                    </g><g transform="rotate(330 50 50)">
                        <rect x={47} y={24} rx={3} ry={6} width={6} height={12} fill="#0a0a0a">
                            <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
                        </rect>
                    </g>
                </svg>
            }
            <span>{props.children}</span>
        </button>
    )
}

export default Button