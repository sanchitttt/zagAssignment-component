function Text({ children }: { children: React.ReactNode }) {
    return (
        <div className='font-main font-medium text-[16px]'>
            {children}
        </div>
    )
}

export default Text