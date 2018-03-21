// 内存模型
// 1073741824 个字的数组
// CPP LV SP 保存的是 字地址
// PC 保存的是字节地址

class Memory {
    constructor() {
        this.data = []
        
        // 常量池起点
        this.CPP = null
        
        // 局部变量结构起点
        this.LV = null
        
        // 操作数栈栈顶
        this.SP = null
        
        // 方法区 PC 寄存器
        this.PC = null
    }
}

const instructions = {
    // 无参数
    // 什么都不做
    NOP: 0x00,
    // 复制栈顶字节并压入栈
    DUP: 0x59,
    // 栈顶弹处两个字, 将它们的和压入栈
    IADD: 0x60,
    // 栈顶弹处两个字, 将它们的and值压入栈
    IAND: 0x7E,
    // 栈顶弹处两个字, 将它们的 or 值压入栈
    IOR: 0x80,
    // 从过程中返回并带一个整数值
    IRETURN: 0xAC,
    // 从栈顶弹处两个字, 将它们的差压入栈
    ISUB: 0x64,
    // 从栈顶删除一个字
    POP: 0x5F,
    // 交换栈顶两个字
    SWAP: 0x5F,
    // 前缀指令, 表示下一条指令带有 16 位索引
    WIDE: 0xC4,
    
    // 操作数是单字节
    // 将字节压入栈
    BIPUSH: 0x10,
    // 把常数加到局部变量中
    IINC: 0x84,
    // 把局部变量压入栈
    ILOAD: 0x15,
    // 从栈顶弹出一个字并存入局部变量
    ISTORE: 0x36,
    //
    
    // 操作数是两个字节
    // 无条件转移
    GOTO: 0xA7,
    // 从栈顶弹处一个字, 如果是 0 则转移
    IFEQ: 0x99,
    // 从栈顶弹处一个字, 如果< 0 则转移
    IFLT: 0x9B,
    // 从栈顶弹处两个字, 相等则转移
    IF_ICMPEQ: 0x9f,
    // 调用一个方法
    INVIKEVIRTUSL: 0xB6,
    // 把常量池中的变量压入栈
    LDC_W: 0x13,
    
}