
一直对h5页面充满崇敬,可能是没有尝试的东西吧,总是有种神秘感.揣着忐忑的心开始了我的h5之旅。
### 在开始做手机端适配的时候我们需要去了解一些概念
### 1.设备像素
先来看看很多资料上面的描述

	它是物理概念，指的是设备中使用的物理像素(Physic pixel)。  
	这个单位用px表示，它是一个[相对绝对单位]———— 即在同样一  
	个设备上，每1个设备像素所代表的物理长度(如英寸)是固定不变  
	的(即设备像素的绝对性); 但在不同的设备之间，每1个设备像素  
	所代表的物理长度(如英寸)是可以变化的(即设备像素的相对性);
总结的说就是像素就相当于我们日常所说的的厘米(cm)、米(m)、克(g)这些度量单位,但稍微有些不同的是它是个相对单位,对于不同的设备中它对应的英寸数是不一样的.设备像素就是这个设备上总共有多少个这样的单位像素	
###2.css中的px 等同于设备独立像素
这个也是一个相对单位,所以它在一个设备中具体表现为多少英尺不确定,除受到设备影响外还有以下两点可以影响它。

	1、屏幕布局视口大小
	2、屏幕的分辨率
	
总结上面两个概念我们可以知道在手机端这两个单位并不一致
#### 那为什么我们以前在做web端网页的时候没有考虑过这个问题呢?  
	在桌面浏览器中css的1个像素往往都是对应着电脑屏幕的1个物理像
	素，这可能会造成我们的一个错觉，那就是css中的像素就是设备的
	物理像素。但实际情况却并非如此(理由如上),但在移动设备上，必
	须弄明白这点。在早先的移动设备中，屏幕像素密度都比较低，如
	iphone3，它的分辨率为320x480，在iphone3上，一个css像素
	确实是等于一个屏幕物理像素的。后来随着技术的发展，移动设备的
	屏幕像素密度越来越高，从iphone4开始,苹果公司便推出了所谓的
	Retina屏，分辨率提高了一倍，变成640x960，但屏幕尺寸却没变
	化，这就意味着同样大小的屏幕上，像素却多了一倍，这时，一个
	css像素是等于两个物理像素的。其他品牌的移动设备也是这个道
	理。例如安卓设备根据屏幕像素密度可分为ldpi、mdpi、hdpi、
	xhdpi等不同的等级，分辨率也是五花八门，安卓设备上的一个css
	像素相当于多少个屏幕物理像素，也因设备的不同而不同，没有一个
	定论。
#### 这两个概念不同对我们在开发h5页面产生什么样的影响呢,哈哈,应该你会说这不废话吗,当然是不能够将设计师的设计稿百分百的还原到手机上,嗯,是的你说的没错,那怎样才能做到百分百的还原呢?这里面先买个关子,后面我们慢慢来分析.

### 3.设备分辨率(设备分辨率的单位就是上面所说的设备像素)
先来一张图
![avatar](https://upload.chinaz.com/2015/0902/1441167729432.jpg)
分辨率这个概念相信大家接触的都不少,我们都知道同种宽高屏幕下分辨率越高屏幕的清晰度也就越高.为什么这样呢?,因为设备像素就是屏幕中一个个的点,设备分辨率就是横向点的个数 * 纵向点的个数, 这一个点就是一个一个的马赛克色块,同宽度的范围内这种马赛克色块越多显然我们看到的颜色也就越清晰.  

设备分辨率在设备出厂时就已经定了,并不能更改了.读到这可能有人就有疑惑了,我们在用电脑的时候可都是可以调节分辨率的

	电脑上面调整分辨率的时候,其实我怎么调它的像素点数还是那么多
	的.不信你看电脑,人家系统给你推荐的是1366px*768px的分辨率,
	你知道意味着什么吗？没错，微软在这块屏幕上横向设置了768个像
	素，竖向设置1366个像素。再怎么拉扯，这个数字是不会变了。那
	么，为啥我还能调整分辨率呢？我要是调整到800px*600px，按照
	定义，横向就是60个像素，竖向就是800个像素了啊。其实呢，你把
	分辨率调800*600,系统就会分配给你800*600个有效像素个数，也
	就是真实的色彩块。其他的个数呢，就由系统自作主张，通过一系列
	运算给你一个模拟色彩块，填充成正好1366*768个色彩块。这些拿
	来充数的像素块，和真实的像素块放到一起。就好比一个正规军，里
	面掺了很多杂牌军一样，只能是队伍不好带了。

### 4.屏幕像素密度(PPI,每英尺展示的像素块数)
计算公式 PPI = 屏幕对角线的像素数/屏幕对角线的长度。
由此我们可以知道PPI越大屏幕的清晰度越高
### 5.视口viewport

- <b>布局视口,</b>布局视口是看不见的，浏览器厂商设置的一个固定值，一般是768px~1024px之间。这里我们可以认为它是一个画板用于展示网页。
- <b>视觉视口,</b>浏览器可视区域的大小，即用户看到的网页的区域,继承布局视口的宽度,所以我们在一个布局视口为980px的浏览器上一行上是可以放980px内容的.
- <b>理想视口,</b>它对设备来说是最理想的布局视口，用户不需要对页面进行缩放就能完美的显示整个页面。这个理想的宽度是指以CSS像素单位计算的宽度，即屏幕的逻辑像素宽度，跟设备的物理宽度没有关系。在css中，这个宽度就相当于100%的所代表的那个宽度。

###6.那我们该怎么做才能百分百的还原网页呢?
首先我们先想想上面这些所带来的影响: 

- 1px 的css像素不代表1设备像素了,这样在dpr>1的时候,我们会明显的发现我们设置的1px像素的东西明显的看着粗一些
- 页面无法相对于设计稿等比例的缩放
- 图片的锐利度减小,但这个我们可以忽略

 接下来来说说我们项目中所使用的方案<br/>
 <b>根据不同屏幕来动态写入font-size和改变布局视口，并以rem作为宽度单位</b>
- 1.使用meta标签对viewport进行设置达到1css像素等于1个设备像素 以dpr为2为例 即 <meta name="viewport" content="width=device-width,initial-scale=0.5,max-scale=0.5,min-scale=0.5">
	`解释: 首先我们要知道如果不设置meta viewport标签，那么移动设备上浏览器默认的layout viewport宽度值为980px，1024px等这些,所以第一步我们先将视口宽度设置和布局宽度一样即在html头部设置<meta name="viewport" content="width=device-width,initial-scale=1">.然后通过js来获取不同的dpr获取scale=1/dpr来设置<meta name="viewport" content="width=device-width,initial-scale=scale,max-scale=scale,min-scale=scale">这样设置`
- 2.将屏幕分为固定的块数10：作为1rem所代表的px值 ,并给html设置font-size为这个值
`注:屏幕即布局视口可通过document.documentElement.clientWidth获得.这里将屏幕分成10等份,当然你也可以分成其他等份,不过最好是10的倍数,这样我们算出的rem小数点也会少些,这样还原度也会高些)`
这样在任何屏幕下，总长度都为10rem。1rem对应的值也不固定，与屏幕的布局视口宽度有关。
- 3.量取psd获得px值并除于1个rem代表的px数获得对应rem值
 使用sublime text中的插件来实现转换,具体怎么做可[参照这个](https://blog.csdn.net/qq_30159899/article/details/75286409)
 使用postcss的插件postcss-pxtorem,[具体可参照](https://github.com/yyxie/vue-h5)
##总结
哈哈,终于将这篇文章写完了😄

- 1、设备像素是设备分辨率的单位，设备像素和设备分辨率自设备出厂后就已经固定,所以一个设备它的设备像素和设备分辨率是不变的
- 2、DPR = 设备像素/CSS像素 = 设备像素 / 设备独立像素 ~= PPI/160 = 页面缩放比例 DPR = 设备像素/CSS像素是基于layout viewport一致的情况
- 3、CSS像素 = 设备独立像素 = 逻辑像素 
- 4、现代浏览器中实现缩放的方式都是「拉伸」像素：即每CSS像素单位代表的长度发生变化，而像素总数字不变。所以缩放会引起CSS像素的变化。 
- 5、进行缩放时，visual viewport的尺寸会发生变化，layout viewport的尺寸保持不变 
- 6、css中的1px并不是代表设备像素上的1px 
- 7、移动设备分辨率越大，css中1px代表的物理像素就会越多，devicePixelRatio的值也越大 
- 8、ideal viewport的宽度等于移动设备的屏幕宽度(这个理想的宽度是指以CSS像素单位计算的宽度，即屏幕的逻辑像素宽度)，跟设备的物理宽度没有关系。同一个设备的ideal viewport的宽度固定不变。
- 9、width=device-width和initial-scale=1.0的功能基本一样width=device-width在IPhone和IPad上存在兼容问题;initial-scale=1.0在IE上存在兼容问题

参考链接
https://www.cnblogs.com/2050/p/3877280.html
https://blog.csdn.net/aiolos1111/article/details/51967744
https://blog.csdn.net/aiolos1111/article/details/51919795
https://juejin.im/entry/59ca3c6df265da064f2024af



