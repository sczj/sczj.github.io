(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{248:function(s,a,e){"use strict";e.r(a);var t=e(17),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos安装mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos安装mysql"}},[s._v("#")]),s._v(" CentOS安装mysql")]),s._v(" "),e("p",[e("strong",[s._v("前提是自己的centos可以连接外网")]),s._v("\n一、从官方下载并安装Yum Repository\n1、下载Yum Repository。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  curl -O https://repo.mysql.com//mysql57-community-release-el7-11.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、安装Yum Repository。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  yum -y localinstall mysql57-community-release-el7-11.noarch.rpm\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("3、查看可用的repo。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@localhost admin]#   yum repolist enabled|grep "mysql.*-community.*"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("4、安装MySQL-Server。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  yum -y install mysql-community-server\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("二、配置并启动服务\n1、启动服务")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  systemctl start mysqld\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("2、查找初始密码。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  grep 'temporary password' /var/log/mysqld.log\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807114805706.png",alt:"在这里插入图片描述"}})]),s._v(" "),e("p",[s._v("3、登录并修改密码。")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@localhost admin]#  mysql -u root -p\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807114942820.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v("\n4、设置密码(这里我密码设置成admin)")]),s._v(" "),e("div",{staticClass:"language-LINUX line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql> set password=password('admin');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807115315735.png",alt:"set password=password('test123');"}}),s._v("\n此处的ERROR是由于密码强度不够造成的，提供一个强度高的密码即可。")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mysql>set password =password('Centos.mysql./8');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807115847923.png",alt:"在这里插入图片描述"}}),s._v("\n三、用Navicat连接测试\n1.连接后出现下面问题\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807124333439.png",alt:"在这里插入图片描述"}}),s._v("\n2.解决方法\n命令行登录mysql并查询用户对用的允许地址，如图")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("use mysql;\nselect user,host from user;\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807124746296.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v("\n3、修改用户权限")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("update user set host = '%' where user = 'root';\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("4、查看用户权限是否修改成功")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('select user,host from user where user="root";\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://img-blog.csdnimg.cn/20190807125221419.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}}),s._v("\n说明修改成功，任何ip都可以进行访问\n5、 更新数据库：")]),s._v(" "),e("div",{staticClass:"language-MYSQL line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("flush privileges; \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后退出mysql命令行，再有Navicat连接，则显示成功\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2019080712543583.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM3NDkzNTU2,size_16,color_FFFFFF,t_70",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);