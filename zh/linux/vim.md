# VIM

vundle 搭建很方便

1. git clone https://github.com/gmarik/Vundle.vim.git ~/.vim/bundle/Vundle.vim

2. 修改 .vimrc

3. 打开vim在底行模式下输入 BundleInstall

4. 如果还需要其他插件，可以使用 BundleSearch 进行在线查找插件

## 配置文件内容

```
filetype off
syntax on
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" 加载插件
Plugin 'VundleVim/Vundle.vim'
Plugin 'scrooloose/nerdtree'
Plugin 'vim-airline/vim-airline'
Plugin 'fatih/vim-go'
Plugin 'vim-airline/vim-airline-themes'
Plugin 'michaelHL/awesome-vim-colorschemes'
Plugin 'Tagbar'
Plugin 'Tabular'
call vundle#end()
filetype plugin indent on     " required

" 打开自动定位到最后编辑的位置, 需要确认.viminfo当前用户可写
if has("autocmd")
    au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g'\"" | endif
endif

" 快捷键
map <C-h> <C-w><C-h>
map <C-j> <C-w><C-j>
map <C-l> <C-w><C-l>
map <C-k> <C-w><C-k>

"<F2>设置是否显示行号
nnoremap <silent> <F2> :set number!<CR>
"空格打开关闭折叠
nnoremap <space> @=((foldclosed(line('.')) < 0) ? 'zc' : 'zo')<CR>
```


由于已经将 bash profile，vimrc 等存放在 github
私有仓库中，所以上述配置内容较少。

有问题的同学，可以随时联系
