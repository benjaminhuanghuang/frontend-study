



为什么不使用 margin 滚动歌词， fontsize 设置 active line？
margin will cause re-flow in main thread，重新布局，影响效率 
fontsize change will cause layout changes

transform works in compositor thread.






