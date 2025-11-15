import { useContext } from "react";
import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext";
import TodoHeader from "../TodoHeader";

interface TodoContainerProps {
    children: React.ReactNode
}

export const TodoContainer = ({ children }: TodoContainerProps) => {

    const { theme } = useContext(ThemeContext);
    return (
        <main className={`${themeConfig[theme].layout.backgroundColor} min-h-screen`}>
            <div className={`${themeConfig[theme].layout.heroClass} h-80 bg-cover bg-center`}>
                <div className="max-w-[43.75rem] m-auto p-8">
                    <TodoHeader></TodoHeader>
                </div>
            </div>
            <div className="max-w-[43.75rem] mt-[-150px] m-auto pr-8 pl-8">{children}</div>
        </main>

    )
}