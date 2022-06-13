export type SelectorProps<T> = {
    height: number,
    width: number,
    marginLeftRight: number, 
    marginTopBottom: number
    value: T,
    setValue: React.Dispatch<React.SetStateAction<T>>
}