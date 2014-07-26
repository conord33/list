Exec { path => [ "/bin/", "/sbin/", "/usr/bin/", "/usr/sbin/" ] }

group { 'puppet':
	ensure => present,
}

class repos {
  exec {"property commons":
    command => "apt-get update && apt-get -y install python-software-properties",
  }

  exec {"add node repo":
    command => "add-apt-repository ppa:chris-lea/node.js",
    require => Exec['property commons'],
  }
}

class system-update {
  exec { 'apt-get update':
    command => 'apt-get update -y',
  }

  package { "build-essential":
    ensure => present,
    require => Exec['apt-get update'],
  }
}

# class {'known_hosts':} ->
class {'repos':} ->
class {'system-update':}

class {'git':
  require => Class['system-update'],
}

/*  no redis now maybe later?
class {'redis-server':
  require => Class['system-update'],
}
*/

class {'nodejs':
  require => [
    Class['system-update'],
    Class['git'],
    #Class['redis-server']
  ],
}